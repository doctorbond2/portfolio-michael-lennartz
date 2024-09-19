import Image from 'next/image';

const ProfileImage = () => (
  <div
    style={{
      width: '400px',
      height: '400px',
      backgroundColor: '#f0f0f0',
      borderRadius: '50%',
      border: '2px solid #333',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Image
      src="/placeholder.jpg"
      alt="Profile Picture"
      layout="fill"
      objectFit="contain"
    />
  </div>
);

export default ProfileImage;
