
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function CheckoutForm() {
  const handlePayment = () => {
    window.location.href = 'https://pages.razorpay.com/pl_Qnj4GOu7ySrQ01/view';
  };

  return (
    <Card className="rounded-2xl shadow-xl border-border bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Get Instant Access</CardTitle>
        <CardDescription>
          One-time payment. Lifetime access.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-6 pb-6">
        <Separator />
        <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Real Value of This Bundle:</span>
                <span className="font-bold text-primary/70 line-through">₹9,999</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Early-Bird Discount (90% OFF):</span>
                <span className="font-bold text-primary">– ₹8,999</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Summer Special:</span>
                <span className="font-bold text-primary">– ₹300</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Limited-Time Bonus Savings:</span>
                <span className="font-bold text-primary">– ₹551</span>
            </div>
        </div>
        <Separator />
        <div className="text-center">
            <p className="text-2xl font-extrabold text-primary">
              ₹149 Only
            </p>
            <p className="font-semibold text-muted-foreground mt-1">
                Lifetime Access Included!
            </p>
        </div>
      </CardContent>
      <CardFooter className="lg:p-6 lg:pt-0 fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-sm p-4 border-t border-border lg:static lg:bg-transparent lg:border-none lg:backdrop-blur-none z-10">
        <Button
          onClick={handlePayment}
          size="lg"
          className="w-full h-14 text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
        >
          Get Instant Access for ₹149 →
        </Button>
      </CardFooter>
    </Card>
  );
}
