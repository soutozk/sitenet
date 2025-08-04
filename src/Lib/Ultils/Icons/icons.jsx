import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Check,
  MessageCircle,
  Zap,
  Gift,
  CheckCircle,
  DollarSign,
  User,
  Signal,
} from "lucide-react";

export const iconComponents = {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Check,
  MessageCircle,
  Zap,
  Gift,
  CheckCircle,
  DollarSign,
  User,
  Signal,
};

export const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado`);
    return null;
  }

  return (
    <IconComponent size={size} color={color} className={className} {...props} />
  );
};

export const getIcon = (name, props = {}) => {
  return <Icon name={name} {...props} />;
};
