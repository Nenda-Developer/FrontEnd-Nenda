export interface FormData {
  // Define the shape of the formData object
  // You can customize these properties based on your requirements
  name: string
  email: string
  age: number
  // ... other properties ...
}

export interface ContributorStepOneProps {
  onSubmit: () => void
  setPage: (page: string) => void
  formData: FormData
}
