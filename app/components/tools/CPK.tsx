import React, { useState } from 'react'

const CPK: React.FC = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imagePreviewUrl && (
        <img
          src={imagePreviewUrl}
          alt="Uploaded"
          style={{ maxWidth: '100%', maxHeight: '400px' }}
        />
      )}
    </div>
  )
}

export default CPK
