// import SSR caching image tag
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div class='center'>
            <h1 className={styles.coolText}>About me</h1>

            <p>Here is all about me</p>

            {/*loading an image locally*/}
            <Image
                src="/vercel.svg"
                alt="the vercel logo"
                width={500}
                height={500}
            />
            {/* loading and image from hosting domain */}
            <Image
                src="https://placekitten.com/300/300"
                alt="a pic of mag creature"
                width={300}
                height={300}
            />
        </div>
    )
}