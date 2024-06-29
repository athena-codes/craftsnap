import useFirestore from '../hooks/useFirestore'
import styles from './css/ImageGallery.module.css'

const ImageGallery = () => {
  const { docs: images, isLoading } = useFirestore('images')

  if (isLoading) {
    return (
      <div className='text-center mt-10'>
        <progress className='progress w-56'></progress>
      </div>
    )
  }

  return (
    <div
      className={`grid md:grid-cols-3 justify-center gap-4 ${styles.galleryContainer}`}
    >
      {images.map(image => (
        <div
          key={image.imageUrl}
          className={`card card-compact ${styles.imageCard} bg-base-100 shadow-xl`}
        >
          <figure className={styles.imageFigure}>
            <img src={image.imageUrl} alt='' />
          </figure>
          <div className='card-body'>
            <p>Upload by: {image.userEmail}</p>
            <span>Created on: {image.createdAt.toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
