"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Order, OrderStatus } from "@/types";
import { INITIAL_ORDERS } from "@/data/orders";

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  resetDemoOrders: () => void;
  getOrderById: (orderId: string) => Order | undefined;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

const ORDERS_STORAGE_KEY = "whitelily_admin_orders_v1";

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (saved) {
        setOrders(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load orders from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error("Failed to save orders to localStorage", e);
    }
  }, [orders, isLoaded]);

  const addOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === orderId ? { ...order, status } : order))
    );
  };

  const resetDemoOrders = () => {
    setOrders(INITIAL_ORDERS);
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
    } catch (e) {
      console.error(e);
    }
  };

  const getOrderById = (orderId: string) => {
    return orders.find((o) => o.id.toLowerCase() === orderId.toLowerCase());
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        resetDemoOrders,
        getOrderById,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
}
