import { useState } from "react"

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File  |  null>(null)

  // ************* Upload photo functionality *****************************
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(selectedFile) {
      // Start uploading image
      console.log(selectedFile)
    }
    setSelectedFile(null)
  }
// ************************************************************************

  return (
    <div className='text-center mt-10'>
      <form onSubmit={handleSubmit} className='flex items-center flex-col gap-8'>
        <input
          type='file'
          onChange={handleFileChange}
          className='file-input file-input-bordered w-full max-w-xs'
        />
        <button type='submit' className="btn gap-3"> Upload </button>
      </form>
    </div>
  )
}

export default UploadForm
