import { format } from 'date-fns';

export default function useFormateDateHook() {
  // Format the date to DD/MM/YYYY
  const formatDate = (dateString, dateFormat = 'dd/MM/yyyy') => {
    return format(new Date(dateString), dateFormat);
  };

  return formatDate;
}
