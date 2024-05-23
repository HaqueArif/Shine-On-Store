import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <Container>
      <h1 className="text-3xl sm:text-4xl mt-20 font-bold">
        Hi, how can we help you?
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-20 mt-20">
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Shipping & Tracking</h2>
            <span>How do I track my order?</span>
            <span>What is Zogics shipping policy?</span>
            <span>Where do you ship from?</span>
            <span>Do you offer free shipping?</span>
            <span>How many days will it take to receive my order(s)?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Returns</h2>

            <span>How do I make a return?</span>
            <span>What is the Zogics 100% Happiness Guarantee?</span>
            <span>What do I do if I receive damaged items?</span>
            <span>Are there restocking fees on returned items?</span>
            <span>What is your return policy?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Ordering</h2>

            <span>How do I place an order?</span>
            <span>Can I send you a PO?</span>
            <span>Can I order item(s) not found on your website?</span>
            <span>How do I request a quote?</span>
            <span>How do I apply a promo code to my order?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Payment</h2>

            <span>How do I sign up for Net 30 payment?</span>
            <span>Do you offer financing?</span>
            <span>When will my order be billed to my credit card?</span>
            <span>What are your accepted payment methods?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">My Account</h2>

            <span>How do I set my account up for tax-exempt purchasing?</span>
            <span>How do I create an account with Zogics?</span>
            <span>How do I reset my password?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Customer Service</h2>

            <span>How do I contact the Zogics customer service team?</span>
            <span>
              How do I sign up to receive email notifications & promotions?
            </span>
            <span>What are your hours of operation?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Subscribe & Save</h2>

            <span>How do I set up a subscription?</span>
            <span>How do I update my payment method on my subscription?</span>
            <span>How do I edit my subscription details?</span>
            <span>How do I skip a shipment with my subscription?</span>
            <span>How do I cancel my subscription?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Website</h2>
            <span>Where can I find your Rewards program?</span>
            <span>How do your Fulfillment Services work?</span>
            <span>How do I inquire about Offsite Inventory Management?</span>
            <span>What is the Strategic Sourcing service?</span>
            <span>What is Ardent Fitness</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-semibold">Product Information</h2>

            <span>Are Zogics wipes EPA approved?</span>
            <span>Which Zogics wipe is right for me?</span>
            <span>How many wipes do I need at my facility?</span>
            <span>Do you have any deals on wipes for new customers?</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 mt-10">
            <span>See all articles</span>
            <ArrowRight />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
