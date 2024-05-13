import useFirestore from "../hooks/useFirestore"

const ImageGallery = () => {

  const { docs } = useFirestore('images')
  console.log('DOCS --->', docs)

  return (
    <div className="grid md:grid-cols-3 justify-center gap-4">
      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure>
          <img
            src=''
            alt=''
          />
        </figure>
        <div className='card-body'>

          <p>Upload by:</p>
          <span>Created on:</span>

        </div>
      </div>
    </div>
  )
}

export default ImageGallery
