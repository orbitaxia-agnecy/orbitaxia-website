/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Megaphone, 
  Search, 
  Code, 
  Palette, 
  Video, 
  TrendingUp, 
  Activity, 
  Building, 
  GraduationCap, 
  ShoppingBag, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Clock, 
  Menu, 
  X, 
  MessageSquare, 
  Target, 
  Sparkles, 
  Check, 
  Users, 
  ShieldCheck,
  Calendar,
  Layers,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  const iconMap: Record<string, any> = {
    Megaphone,
    Search,
    Code,
    Palette,
    Video,
    TrendingUp,
    Activity,
    Building,
    GraduationCap,
    ShoppingBag,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
    Clock,
    Menu,
    X,
    MessageSquare,
    Target,
    Sparkles,
    Check,
    Users,
    ShieldCheck,
    Calendar,
    Layers,
    Facebook,
    Instagram,
    Linkedin,
    ChevronDown,
    ExternalLink
  };

  const SelectedIcon = iconMap[name] || HelpCircleFallback;
  return <SelectedIcon className={className} size={size} />;
}

// Simple fallback icon to prevent any hard crashes
function HelpCircleFallback({ className, size }: { className: string; size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
