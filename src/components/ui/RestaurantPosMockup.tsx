"use client";

import React, { useState } from "react";
import {
  Monitor,
  Tv,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  CreditCard,
  QrCode,
  Building2,
  UtensilsCrossed,
  ChefHat,
  Receipt,
  Layers,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
}

const sampleMenuItems: MenuItem[] = [
  { id: "1", name: "Artisan Truffle Burger", category: "Mains", price: 340 },
  { id: "2", name: "Woodfired Margherita Pizza", category: "Mains", price: 420 },
  { id: "3", name: "Crispy Peri-Peri Fries", category: "Sides", price: 160 },
  { id: "4", name: "Classic Espresso Tonic", category: "Beverages", price: 180 },
  { id: "5", name: "Smoked Paneer Tikka Wrap", category: "Mains", price: 290 },
  { id: "6", name: "Chilled Cold Brew Latte", category: "Beverages", price: 210 },
];

export const RestaurantPosMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<"pos" | "kds" | "admin">("pos");
  const [cart, setCart] = useState<Array<MenuItem & { qty: number }>>([
    { id: "1", name: "Artisan Truffle Burger", category: "Mains", price: 340, qty: 2 },
    { id: "3", name: "Crispy Peri-Peri Fries", category: "Sides", price: 160, qty: 1 },
    { id: "4", name: "Classic Espresso Tonic", category: "Beverages", price: 180, qty: 2 },
  ]);
  const [selectedTable, setSelectedTable] = useState("Table T-04");

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + gst;

  const addItem = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden transition-all duration-300">
      {/* Top Application Bar */}
      <div className="bg-[#123B8A] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-blue-900/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-[#38A5FF]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">
                Alvora POS & KDS Engine
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-200 border border-blue-400/30">
                Pilot Concept Demo
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-200/80">
              <Building2 className="w-3 h-3 text-[#38A5FF]" />
              <span>Downtown Flagship Outlet • Terminal 01</span>
            </div>
          </div>
        </div>

        {/* Screen Switcher */}
        <div className="flex items-center bg-white/10 rounded-lg p-1 text-xs gap-1">
          <button
            onClick={() => setActiveScreen("pos")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeScreen === "pos"
                ? "bg-white text-[#123B8A] font-bold shadow-xs"
                : "text-blue-100 hover:bg-white/10"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Counter POS</span>
          </button>
          <button
            onClick={() => setActiveScreen("kds")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeScreen === "kds"
                ? "bg-white text-[#123B8A] font-bold shadow-xs"
                : "text-blue-100 hover:bg-white/10"
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Kitchen Display (KDS)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>
          <button
            onClick={() => setActiveScreen("admin")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeScreen === "admin"
                ? "bg-white text-[#123B8A] font-bold shadow-xs"
                : "text-blue-100 hover:bg-white/10"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Multi-Outlet Admin</span>
          </button>
        </div>
      </div>

      {/* Screen 1: Counter POS */}
      {activeScreen === "pos" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-slate-50">
          {/* Menu & Category Section */}
          <div className="lg:col-span-7 p-4 sm:p-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
            <div>
              {/* Table Selector */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Assigned Table:
                  </span>
                  <div className="flex gap-1.5">
                    {["Table T-02", "Table T-04", "Table T-08", "Takeaway"].map((tbl) => (
                      <button
                        key={tbl}
                        onClick={() => setSelectedTable(tbl)}
                        className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                          selectedTable === tbl
                            ? "bg-[#1677E8] text-white shadow-xs"
                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tbl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {sampleMenuItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => addItem(item)}
                    className="p-3 bg-white rounded-xl border border-slate-200/90 hover:border-[#1677E8] hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-[#1677E8] uppercase block mb-1">
                        {item.category}
                      </span>
                      <h5 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#123B8A]">
                        {item.name}
                      </h5>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-900">
                        ₹{item.price}
                      </span>
                      <span className="w-5 h-5 rounded-md bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center group-hover:bg-[#1677E8] group-hover:text-white transition-colors">
                        <Plus className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hint Notice */}
            <div className="mt-4 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] text-[#123B8A] flex items-center justify-between">
              <span>Touch any menu item to add directly into current table bill</span>
              <span className="font-semibold text-[#1677E8]">Live Sync Ready</span>
            </div>
          </div>

          {/* Cart & Billing Drawer */}
          <div className="lg:col-span-5 p-4 sm:p-5 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-[#1677E8]" />
                  <span className="text-sm font-bold text-slate-800">
                    Order Summary — {selectedTable}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-400">
                  #ALV-2089
                </span>
              </div>

              {/* Items in Cart */}
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-6">
                    Cart is empty. Select items to add.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100"
                    >
                      <div className="flex-1 pr-2">
                        <span className="font-medium text-slate-800 block">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          ₹{item.price} × {item.qty}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">
                          ₹{item.price * item.qty}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-slate-400 hover:text-red-500 rounded cursor-pointer transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Calculations & Pay Button */}
            <div className="border-t border-slate-200 pt-3 mt-3 space-y-1.5">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>GST (5%)</span>
                <span>₹{gst}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-900 pt-1.5 border-t border-slate-100">
                <span>Total Amount</span>
                <span className="text-[#123B8A] text-base">₹{grandTotal}</span>
              </div>

              {/* Payment Action Bar */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>UPI Dynamic QR</span>
                </button>
                <button
                  type="button"
                  className="w-full py-2 px-3 rounded-lg bg-[#123B8A] text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[#0C2860] transition-colors shadow-xs"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Card / Cash</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screen 2: Kitchen Display System (KDS) */}
      {activeScreen === "kds" && (
        <div className="p-4 sm:p-5 bg-slate-900 text-white min-h-[460px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-white">
                Live Kitchen Prep Queue
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span>3 Tickets In Preparation</span>
              <span className="text-emerald-400">Avg Prep: 9m 12s</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* KDS Ticket 1 */}
            <div className="rounded-xl bg-slate-800 border-2 border-amber-500/80 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-700 mb-3">
                  <span className="font-bold text-sm text-white">#104 • Table T-02</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 04:18
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-center justify-between">
                    <span>2 × Woodfired Margherita Pizza</span>
                    <span className="text-amber-400 text-[10px]">In Oven</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>1 × Crispy Peri-Peri Fries</span>
                    <span className="text-emerald-400 text-[10px]">Done</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-4 w-full py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Mark Ticket Ready
              </button>
            </div>

            {/* KDS Ticket 2 */}
            <div className="rounded-xl bg-slate-800 border-2 border-emerald-500/80 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-700 mb-3">
                  <span className="font-bold text-sm text-white">#105 • Table T-04</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 01:45
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-center justify-between">
                    <span>2 × Artisan Truffle Burger</span>
                    <span className="text-blue-300 text-[10px]">Plating</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>2 × Classic Espresso Tonic</span>
                    <span className="text-blue-300 text-[10px]">Barista</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-4 w-full py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Mark Ticket Ready
              </button>
            </div>

            {/* KDS Ticket 3 */}
            <div className="rounded-xl bg-slate-800 border border-slate-700 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-700 mb-3">
                  <span className="font-bold text-sm text-white">#106 • Takeaway</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 00:32
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-center justify-between">
                    <span>1 × Smoked Paneer Tikka Wrap</span>
                    <span className="text-slate-400 text-[10px]">Queued</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>1 × Chilled Cold Brew Latte</span>
                    <span className="text-slate-400 text-[10px]">Queued</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-4 w-full py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Start Preparation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen 3: Multi-Outlet Admin */}
      {activeScreen === "admin" && (
        <div className="p-5 bg-white min-h-[460px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
            <div className="p-4 rounded-xl bg-[#F5F8FC] border border-blue-100">
              <span className="text-xs text-slate-500 block mb-1">Today&apos;s Revenue</span>
              <span className="text-2xl font-bold text-[#123B8A]">₹68,450</span>
              <span className="text-[11px] text-emerald-600 font-medium block mt-1">
                +14.2% vs yesterday
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#F5F8FC] border border-blue-100">
              <span className="text-xs text-slate-500 block mb-1">Completed Orders</span>
              <span className="text-2xl font-bold text-[#101828]">184 Orders</span>
              <span className="text-[11px] text-slate-500 block mt-1">Across 3 Active Terminals</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F5F8FC] border border-blue-100">
              <span className="text-xs text-slate-500 block mb-1">Multi-Outlet Status</span>
              <span className="text-2xl font-bold text-emerald-600">3 / 3 Online</span>
              <span className="text-[11px] text-slate-500 block mt-1">Central Menu Synced</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
            <div className="bg-slate-50 px-4 py-2.5 font-bold text-slate-700 grid grid-cols-4">
              <span>Outlet Name</span>
              <span>Daily Gross</span>
              <span>Tickets</span>
              <span>Health Status</span>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="px-4 py-3 grid grid-cols-4 items-center">
                <span className="font-semibold text-slate-900">Downtown Flagship</span>
                <span>₹36,200</span>
                <span>94 orders</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Live
                </span>
              </div>
              <div className="px-4 py-3 grid grid-cols-4 items-center">
                <span className="font-semibold text-slate-900">Westside Express</span>
                <span>₹19,850</span>
                <span>52 orders</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Live
                </span>
              </div>
              <div className="px-4 py-3 grid grid-cols-4 items-center">
                <span className="font-semibold text-slate-900">Airport Hub Kiosk</span>
                <span>₹12,400</span>
                <span>38 orders</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Live
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
