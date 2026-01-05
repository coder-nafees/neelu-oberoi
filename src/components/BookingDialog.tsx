"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import bookingImage from "../../public/NEELU OBEROI2118.png";

// Calendar data for September 2023
const generateCalendarDays = () => {
  const days = [];
  const daysInMonth = 30;
  const startDay = 5; // September 1, 2023 is a Friday (index 5)

  // Add empty cells for days before the month starts
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};

const timeSlots = ["09:00", "11:00", "01:00", "03:00", "04:00", "06:00"];

interface BookingDialogProps {
  triggerClassName?: string;
  triggerText?: string;
  showIcon?: boolean;
}

export default function BookingDialog({
  triggerClassName = "group relative px-8 py-4 bg-[#E4D9C5] hover:bg-[#B8985E] text-[#885730] rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105",
  triggerText = "Book an Appointment",
  showIcon = true,
}: BookingDialogProps) {
  const [selectedType, setSelectedType] = useState("Bride");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ...formData,
      type: selectedType,
      date: selectedDate,
      time: selectedTime,
    });
    // Handle booking submission here
    // You can add your API call or state management logic
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={triggerClassName}>
          <span className="flex items-center gap-3 font-medium tracking-wide">
            {triggerText}
            {showIcon && (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            )}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-full min-w-max max-h-[90vh] overflow-y-auto p-0">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative hidden lg:block h-[300px] md:h-full min-h-[400px] bg-[#E8DCC4] rounded-l-lg overflow-hidden">
            <Image
              src={bookingImage}
              alt="Designer outfit"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Form */}
          <div className="p-6 md:p-8 bg-white">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Design Your Dream Look
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleBookNow} className="space-y-5">
              {/* Occasion Select */}
              <div className="space-y-2">
                <Select defaultValue="virtual-meet">
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-11">
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="virtual-meet">
                      For Virtual Meet
                    </SelectItem>
                    <SelectItem value="wedding">For Wedding</SelectItem>
                    <SelectItem value="party">For Party</SelectItem>
                    <SelectItem value="casual">For Casual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-gray-300 rounded-md h-11 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-gray-300 rounded-md h-11 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-gray-300 rounded-md h-11 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* User Type Selection */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedType("Bride")}
                  className={`flex-1 py-2.5 rounded-full border transition-all duration-200 text-sm font-medium ${
                    selectedType === "Bride"
                      ? "bg-[#E4D9C5] border-[#B8985E] text-[#885730]"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Bride
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType("Groom")}
                  className={`flex-1 py-2.5 rounded-full border transition-all duration-200 text-sm font-medium ${
                    selectedType === "Groom"
                      ? "bg-[#E4D9C5] border-[#B8985E] text-[#885730]"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Groom
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType("Others")}
                  className={`flex-1 py-2.5 rounded-full border transition-all duration-200 text-sm font-medium ${
                    selectedType === "Others"
                      ? "bg-[#E4D9C5] border-[#B8985E] text-[#885730]"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Others
                </button>
              </div>

              {/* Calendar and Time Slots */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {/* Calendar */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    September 2023
                  </h3>
                  <div className="space-y-2">
                    {/* Calendar Header */}
                    <div className="grid grid-cols-7 gap-1 text-xs font-medium text-gray-600 text-center mb-2">
                      <div>Sun</div>
                      <div>Mon</div>
                      <div>Tue</div>
                      <div>Wed</div>
                      <div>Thu</div>
                      <div>Fri</div>
                      <div>Sat</div>
                    </div>
                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-1">
                      {generateCalendarDays().map((day, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => day && setSelectedDate(day)}
                          disabled={!day}
                          className={`aspect-square flex items-center justify-center text-xs rounded-md transition-all duration-200 ${
                            !day
                              ? "invisible"
                              : selectedDate === day
                              ? "bg-gray-900 text-white font-semibold"
                              : "bg-white border border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Time Slots
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-full border text-xs font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? "bg-gray-900 border-gray-900 text-white"
                            : "bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#E4D9C5] hover:bg-[#D4C5A9] text-[#885730] font-medium py-6 rounded-full transition-all duration-300 mt-6"
              >
                Book Now
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}