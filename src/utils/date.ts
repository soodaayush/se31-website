export function formatTorontoDate(dateStr: string): string {
  // Take only the date part YYYY-MM-DD
  const dateOnly = dateStr.split('T')[0];
  const [year, month, day] = dateOnly.split('-').map(Number);
  
  // Create a Date object for the local day at noon to avoid DST/timezone shifts around midnight
  const date = new Date(year, month - 1, day, 12, 0, 0);
  
  return date.toLocaleDateString('en-US', { 
    timeZone: 'America/Toronto', 
    dateStyle: 'full' 
  });
}
