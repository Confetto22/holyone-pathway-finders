import { Info, PanelRight, Phone, Sparkle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const PaymentDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-primary">
        <Info className="text-secondary cursor-pointer p-1" size={33} />
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full">
        <SheetHeader>
          <SheetTitle className="text-black/60 p-0">
            After payment, send proof via WhatsApp with Your Full Name + Service
            Paid For.
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto -mx-6 px-6">
          <div className="payment-panel flex flex-col items-center justify-center p-0 pb-6">
            <div className="bg-white p-6 text-gray-900 shadow-lg w-full ">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-700 p-2 rounded-lg text-white">
                  <Sparkle size={20} />
                </div>
              </div>
              <h3 className="text-xl font-bold leading-tight mb-1">
                Pay & Start — Fast Checkout Interac e-Transfer (Canada Only)
              </h3>
              <p className="text-orange-600 text-sm font-medium mb-4">
                <a href="mailto:holyonepathwaypartners@gmail.com">
                  ✉ holyonepathwaypartners@gmail.com
                </a>
              </p>

              <div className="text-sm font-medium mb-4">
                <p>
                  <span className="font-bold">Account Name:</span>
                  <br />
                  Holyone Pathway Partners
                </p>
                <p>
                  <span className="font-bold">Bank:</span> TD Bank
                </p>
                <p>
                  <span className="font-bold">Transit No:</span> 38572
                </p>
                <p>
                  <span className="font-bold">Institution No:</span> 004
                </p>
                <p>
                  <span className="font-bold">Account Number:</span> 5004123
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-700 p-2 rounded-lg text-white">
                  <Phone size={20} />
                </div>
              </div>
              <p className="text-sm font-bold mb-1">After Payment:</p>
              <p className="text-sm mb-4">
                Send screenshot to WhatsApp <br />
                <span className="font-medium">+1 548 325 8804</span>
              </p>

              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-700 p-2 rounded-lg text-white">
                  <Sparkle size={20} />
                </div>
              </div>
              <p className="text-sm font-bold mb-1">
                International Wire Transfer
              </p>
              <div className="text-sm space-y-1">
                <p>
                  <span className="font-bold">Bank:</span> TD Canada Trust
                </p>
                <p>
                  <span className="font-bold">SWIFT/BIC:</span> TDOMGATTTOR
                </p>
                <p>
                  <span className="font-bold">Branch:</span> 190 Dundas St E,
                  Toronto, ON
                </p>
                <p>
                  <span className="font-bold">Wire Account:</span> 38575004123
                </p>
                <p>
                  <span className="font-bold">Account Name:</span> Holyone
                  Pathway Partners
                </p>
              </div>
            </div>
            <div className="bg-blue-700 text-white p-6  shadow-lg w-full ">
              <h3 className="text-lg font-bold mb-3">Card Payment (Stripe)</h3>
              <div className="flex gap-2 mb-4">
                <div className="bg-white text-blue-900 px-2 py-1 rounded font-bold text-xs">
                  VISA
                </div>
                <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-xs">
                  MasterCard
                </div>
                <div className="bg-black text-white px-2 py-1 rounded font-bold text-xs">
                  ApplePay
                </div>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded mb-4 transition">
                Pay with Card
              </button>

              <p className="text-sm italic opacity-90">
                Micro-services & Digital Products begin same day. <br />
                Visa packages begin within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PaymentDrawer;
