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
  Sparkles,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "Mains" | "Sides" | "Beverages";
  price: number;
  badge?: string;
}

const sampleMenuItems: MenuItem[] = [
  { id: "1", name: "Artisan Truffle Burger", category: "Mains", price: 340, badge: "Chef Special" },
  { id: "2", name: "Woodfired Margherita Pizza", category: "Mains", price: 420, badge: "Bestseller" },
  { id: "3", name: "Crispy Peri-Peri Fries", category: "Sides", price: 160 },
  { id: "4", name: "Classic Espresso Tonic", category: "Beverages", price: 180 },
  { id: "5", name: "Smoked Paneer Tikka Wrap", category: "Mains", price: 290 },
  { id: "6", name: "Chilled Cold Brew Latte", category: "Beverages", price: 210 },
];

export const RestaurantPosMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<"pos" | "kds" | "admin">("pos");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Mains" | "Sides" | "Beverages">("All");
  const [cart, setCart] = useState<Array<MenuItem & { qty: number }>>([
    { id: "1", name: "Artisan Truffle Burger", category: "Mains", price: 340, qty: 2 },
    { id: "3", name: "Crispy Peri-Peri Fries", category: "Sides", price: 160, qty: 1 },
    { id: "4", name: "Classic Espresso Tonic", category: "Beverages", price: 180, qty: 2 },
  ]);
  const [selectedTable, setSelectedTable] = useState("Table T-04");

  const filteredItems =
    selectedCategory === "All"
      ? sampleMenuItems
      : sampleMenuItems.filter((i) => i.category === selectedCategory);

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
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#123B8A] via-[#1677E8] to-[#38A5FF] rounded-3xl opacity-15 blur-xl -z-10" />

      {/* Main Terminal Frame */}
      <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(18,59,138,0.1)] overflow-hidden">
        {/* Top Application Bar */}
        <div className="bg-[#123B8A] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-blue-900/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
              <UtensilsCrossed className="w-4 h-4 text-[#38A5FF]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-wide text-white">
                  Alvora Hospitality Suite
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30">
                  POS & KDS Core
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-200/90">
                <Building2 className="w-3 h-3 text-[#38A5FF]" />
                <span>Downtown Flagship • Station 01</span>
              </div>
            </div>
          </div>

          {/* Screen Switcher */}
          <div className="flex items-center bg-black/20 backdrop-blur-md rounded-xl p-1 text-xs gap-1 border border-white/10">
            <button
              onClick={() => setActiveScreen("pos")}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeScreen === "pos"
                  ? "bg-white text-[#123B8A] shadow-sm font-bold"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Counter POS</span>
            </button>
            <button
              onClick={() => setActiveScreen("kds")}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeScreen === "kds"
                  ? "bg-white text-[#123B8A] shadow-sm font-bold"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Kitchen Display (KDS)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>
            <button
              onClick={() => setActiveScreen("admin")}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeScreen === "admin"
                  ? "bg-white text-[#123B8A] shadow-sm font-bold"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Multi-Outlet</span>
            </button>
          </div>
        </div>

        {/* Screen 1: Counter POS */}
        {activeScreen === "pos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] bg-slate-50">
            {/* Menu & Category Section (7 cols) */}
            <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 bg-[#F8FAFC]">
              <div>
                {/* Table & Dine-in selector */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Table:
                    </span>
                    <div className="flex gap-1.5">
                      {["Table T-02", "Table T-04", "Table T-08", "Takeaway"].map((tbl) => (
                        <button
                          key={tbl}
                          onClick={() => setSelectedTable(tbl)}
                          className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                            selectedTable === tbl
                              ? "bg-[#1677E8] text-white shadow-sm"
                              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {tbl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category filters */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                    {(["All", "Mains", "Sides", "Beverages"] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-xs px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-[#123B8A] text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => addItem(item)}
                      className="p-3.5 bg-white rounded-xl border border-slate-200/90 hover:border-[#1677E8] hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-[#1677E8] uppercase tracking-wider">
                            {item.category}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h5 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#123B8A] transition-colors">
                          {item.name}
                        </h5>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
                        <span className="text-xs font-extrabold text-slate-900">
                          ₹{item.price}
                        </span>
                        <span className="w-6 h-6 rounded-md bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center group-hover:bg-[#1677E8] group-hover:text-white transition-colors">
                          <Plus className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Hint */}
              <div className="mt-4 p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-[#123B8A] flex items-center justify-between">
                <span>Tap items to add live to bill ticket. Auto-syncs to KDS.</span>
                <span className="font-bold text-[#1677E8] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Live Dispatch
                </span>
              </div>
            </div>

            {/* Cart & Billing Drawer (5 cols) */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-[#1677E8]" />
                    <span className="text-sm font-bold text-slate-800">
                      Active Bill — {selectedTable}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1677E8]">
                    #ALV-2089
                  </span>
                </div>

                {/* Items in Cart */}
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <p className="text-xs text-slate-400 text-center py-8">
                      Ticket empty. Select menu items to populate bill.
                    </p>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-xs py-2 border-b border-slate-100"
                      >
                        <div className="flex-1 pr-2">
                          <span className="font-bold text-slate-800 block">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            ₹{item.price} × {item.qty}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="font-extrabold text-slate-900">
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
              <div className="border-t border-slate-200 pt-3.5 mt-3 space-y-1.5">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>GST (5%)</span>
                  <span>₹{gst}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Payable</span>
                  <span className="text-[#123B8A] text-lg font-black">₹{grandTotal}</span>
                </div>

                {/* Payment Action Bar */}
                <div className="pt-2.5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Dynamic UPI QR</span>
                  </button>
                  <button
                    type="button"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#123B8A] hover:bg-[#0C2860] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Card / Cash Terminal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Screen 2: Kitchen Display System (KDS) */}
        {activeScreen === "kds" && (
          <div className="p-4 sm:p-6 bg-slate-900 text-white min-h-[480px]">
            <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-slate-800 mb-5 gap-3">
              <div className="flex items-center gap-2.5">
                <ChefHat className="w-5 h-5 text-emerald-400" />
                <span className="text-sm sm:text-base font-bold text-white">
                  Kitchen Display Live Tickets
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                  3 In Progress
                </span>
                <span className="text-emerald-400 font-bold">Avg Ticket: 9m 12s</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Ticket 1 */}
              <div className="rounded-2xl bg-slate-800 border-2 border-amber-500/80 p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-700 mb-3">
                    <span className="font-bold text-sm text-white">#104 • Table T-02</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3" /> 04:18
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    <li className="flex items-center justify-between">
                      <span className="font-medium">2 × Woodfired Margherita</span>
                      <span className="text-amber-400 text-[10px] font-bold">In Oven</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">1 × Crispy Peri-Peri Fries</span>
                      <span className="text-emerald-400 text-[10px] font-bold">Plated</span>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="mt-5 w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Mark Order Ready
                </button>
              </div>

              {/* Ticket 2 */}
              <div className="rounded-2xl bg-slate-800 border-2 border-emerald-500/80 p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-700 mb-3">
                    <span className="font-bold text-sm text-white">#105 • Table T-04</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3" /> 01:45
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    <li className="flex items-center justify-between">
                      <span className="font-medium">2 × Artisan Truffle Burger</span>
                      <span className="text-blue-300 text-[10px] font-bold">Grill</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">2 × Classic Espresso Tonic</span>
                      <span className="text-blue-300 text-[10px] font-bold">Barista</span>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="mt-5 w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Mark Order Ready
                </button>
              </div>

              {/* Ticket 3 */}
              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-700 mb-3">
                    <span className="font-bold text-sm text-white">#106 • Takeaway</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3" /> 00:32
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    <li className="flex items-center justify-between">
                      <span className="font-medium">1 × Smoked Paneer Wrap</span>
                      <span className="text-slate-400 text-[10px]">Queued</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">1 × Chilled Cold Brew</span>
                      <span className="text-slate-400 text-[10px]">Queued</span>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="mt-5 w-full py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Start Ticket
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Screen 3: Multi-Outlet Admin */}
        {activeScreen === "admin" && (
          <div className="p-4 sm:p-6 bg-white min-h-[480px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-blue-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Today&apos;s Revenue
                </span>
                <span className="text-2xl font-black text-[#123B8A]">₹68,450</span>
                <span className="text-[11px] text-emerald-600 font-bold block mt-1">
                  +14.2% vs yesterday
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-blue-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Completed Orders
                </span>
                <span className="text-2xl font-black text-[#0F172A]">184 Orders</span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">
                  Across 3 Active Terminals
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-blue-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  System Health
                </span>
                <span className="text-2xl font-black text-emerald-600">3 / 3 Online</span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">
                  Central Catalog Synced
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
              <div className="bg-slate-50 px-4 py-3 font-bold text-slate-700 grid grid-cols-4 border-b border-slate-200">
                <span>Outlet Location</span>
                <span>Gross Billings</span>
                <span>Volume</span>
                <span>Sync Status</span>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="px-4 py-3.5 grid grid-cols-4 items-center">
                  <span className="font-bold text-slate-900">Downtown Flagship</span>
                  <span className="font-semibold text-slate-800">₹36,200</span>
                  <span className="text-slate-600">94 orders</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Live
                  </span>
                </div>
                <div className="px-4 py-3.5 grid grid-cols-4 items-center">
                  <span className="font-bold text-slate-900">Westside Express</span>
                  <span className="font-semibold text-slate-800">₹19,850</span>
                  <span className="text-slate-600">52 orders</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Live
                  </span>
                </div>
                <div className="px-4 py-3.5 grid grid-cols-4 items-center">
                  <span className="font-bold text-slate-900">Airport Hub Kiosk</span>
                  <span className="font-semibold text-slate-800">₹12,400</span>
                  <span className="text-slate-600">38 orders</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
