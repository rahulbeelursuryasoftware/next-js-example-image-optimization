import Image from 'next/image';
import nextImage from '../public/spacex.jpg';
import veryBigImage from '../public/veryBigImage.jpg';
import a from '../public/a.jpg';
import b from '../public/b.jpg';
import c from '../public/c.jpg';
import d from '../public/d.jpg';
import e from '../public/e.jpg';
import f from '../public/f.jpg';
import g from '../public/g.jpg';
import h from '../public/h.jpg';

export default function Home() {
  return (
    <div>Images
      <Image src={nextImage} alt="no picture" width={200} height={ 200 }/>
      <Image src={veryBigImage} alt="no picture"  width={200} height={ 200 }/>
      <Image src={a} alt="no picture"  width={200} height={ 200 }/>
      <Image src={b} alt="no picture"  width={200} height={ 200 }/>
      <Image src={c} alt="no picture"  width={200} height={ 200 }/>
      <Image src={d} alt="no picture"  width={200} height={ 200 }/>
      <Image src={e} alt="no picture"  width={200} height={ 200 }/>
      <Image src={f} alt="no picture"  width={200} height={ 200 }/>
      <Image src={g} alt="no picture"  width={200} height={ 200 }/>
      <Image src={h} alt="no picture"  width={200} height={ 200 }/>
    </div>);
}
