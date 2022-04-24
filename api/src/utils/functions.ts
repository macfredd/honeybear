/**
 * Calculate Age (in years) since given birth Date.
 * @param birthDate: the given Birthdate.
 */
export function calculateAge(birthDate: Date): number {
  const today = new Date();
  const dob = new Date(birthDate);

  let years = today.getFullYear() - dob.getFullYear();
  const months = today.getMonth() - dob.getMonth();
  if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
    years--;
  }

  return years;
}
