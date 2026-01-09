import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { DatabaseService } from '@/databse/databse.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderStatus } from 'generated/prisma/enums';

describe('OrdersService', () => {
  let service: OrdersService;
  let db: DatabaseService;

  const mockDatabaseService = {
    order: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    service: {
      findUnique: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: DatabaseService,
          useValue: mockDatabaseService,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    db = module.get<DatabaseService>(DatabaseService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateOrderNum', () => {
    it('should generate a unique order number starting with ORD-', async () => {
      // Mock findUnique to return null (no collision)
      mockDatabaseService.order.findUnique.mockResolvedValue(null);

      const orderNum = await (service as any).generateOrderNum();

      expect(orderNum).toMatch(/^ORD-[A-Z0-9]{9}$/);
      expect(mockDatabaseService.order.findUnique).toHaveBeenCalledWith({
        where: { orderNumber: orderNum },
      });
    });

    it('should retry if order number already exists', async () => {
      // First call returns existing order (collision), second call returns null (success)
      mockDatabaseService.order.findUnique
        .mockResolvedValueOnce({ id: 'existing-id' })
        .mockResolvedValueOnce(null);

      const orderNum = await (service as any).generateOrderNum();

      expect(orderNum).toMatch(/^ORD-[A-Z0-9]{9}$/);
      expect(mockDatabaseService.order.findUnique).toHaveBeenCalledTimes(2);
    });
  });

  describe('createOrder', () => {
    const createOrderDto: CreateOrderDto = {
      serviceId: 'service-123',
      customerInfo: {
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        country: 'US',
      },
      serviceDetails: {
        destination: 'Paris',
      },
    };

    const mockUser = { id: 'user-123', email: 'john@example.com' };
    const mockService = {
      id: 'service-123',
      title: 'Test Service',
      price: 100,
    };
    const mockOrder = {
      id: 'order-123',
      orderNumber: 'ORD-ABC123456',
      status: OrderStatus.PENDING,
      ...createOrderDto,
    };

    it('should create an order successfully', async () => {
      // Mock generateOrderNum implicitly by mocking db.order.findUnique for it
      mockDatabaseService.order.findUnique.mockResolvedValueOnce(null); // For generateOrderNum

      // Mock service lookup
      mockDatabaseService.service.findUnique.mockResolvedValue(mockService);

      // Mock user lookup
      mockDatabaseService.user.findUnique.mockResolvedValue(mockUser);

      // Mock order creation
      mockDatabaseService.order.create.mockResolvedValue(mockOrder);

      // Mock linking
      const linkedOrder = { ...mockOrder, userId: mockUser.id };
      mockDatabaseService.order.update.mockResolvedValue(linkedOrder);

      const result = await service.createOrder(createOrderDto);

      // Verify service lookup
      expect(mockDatabaseService.service.findUnique).toHaveBeenCalledWith({
        where: { id: createOrderDto.serviceId },
      });

      // Verify create was called with correct data including snapshot
      expect(mockDatabaseService.order.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            ...createOrderDto,
            status: OrderStatus.PENDING,
            orderNumber: expect.stringMatching(/^ORD-/),
            serviceSnapshot: mockService,
          }),
        }),
      );

      // Verify update was called to link user and service
      expect(mockDatabaseService.order.update).toHaveBeenCalledWith({
        where: { id: mockOrder.id },
        data: {
          user: { connect: { id: mockUser.id } },
          service: { connect: { id: createOrderDto.serviceId } },
        },
      });

      expect(result).toEqual({
        message: 'order successfully created!',
        linkOrdertoUser: linkedOrder,
      });
    });

    it('should throw error if service is not found', async () => {
      // Mock generateOrderNum implicitly
      mockDatabaseService.order.findUnique.mockResolvedValueOnce(null);

      // Mock service lookup to return null
      mockDatabaseService.service.findUnique.mockResolvedValue(null);

      await expect(service.createOrder(createOrderDto)).rejects.toThrow(
        `Service with ID ${createOrderDto.serviceId} not found`,
      );
    });
  });
});
