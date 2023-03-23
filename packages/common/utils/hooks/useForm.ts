import { useState, useMemo, useCallback } from 'react'

type FormValues<T> = { [K in keyof T]: string }

const useForm = <T extends {}>(initialValues: {
  [K in keyof T]: string
}) => {
  const [formData, setFormData] = useState<FormValues<T>>(
    initialValues as FormValues<T>
  )

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const resetForm = () => {
    setFormData(initialValues as FormValues<T>)
  }

  const register = (id: keyof T) => {
    return {
      id: String(id),
      name: String(id),
      value: formData[id],
      key: String(id),
      onChange: handleChange,
    }
  }

  const memoizedFormData = useMemo(() => formData, [formData])

  return { formData: memoizedFormData, handleChange, resetForm, register }
}

export default useForm
