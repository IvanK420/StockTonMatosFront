export const navigateToCategory = (id: number) => {
  // Logic to navigate to category page
  navigateTo('/categories/' + id)
}
export const navigateToMateriel = (id: number) => {
  // Logic to navigate to Materiel page
  navigateTo('/materiels/' + id)
}
export const navigateToEmplacement = (id: number) => {
  // Logic to navigate to Emplacement page
  navigateTo('/emplacements/' + id)
}

export const navigateToForm = (name: string) => {
  // Logic to navigate to a form page
  navigateTo('/create/' + name)
}