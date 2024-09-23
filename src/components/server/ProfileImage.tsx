import Image from 'next/image';

const ProfileImage = () => {
  const profileImage = '/placeholder.jpg';
  return (
    <>
      {profileImage ? (
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
          <div
            style={{
              width: '100%',
              height: '100%',
              transform: 'scale(1.3)',
              transformOrigin: 'center 10%',
            }}
          >
            <Image
              src="/image0.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default ProfileImage;
