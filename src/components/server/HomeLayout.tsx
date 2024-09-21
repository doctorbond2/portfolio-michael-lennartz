import { HomeLayoutStyles as STYLING } from '@/types/enum';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
export default function HomeLayout() {
  return (
    <>
      {
        <div id="home-wrapper" className={STYLING.Container}>
          <section
            id="left-section-presentation"
            className={STYLING.ProfileInfoSection}
          >
            <ProfileInfo />
          </section>

          <section
            id="right-section-image"
            className={STYLING.ProfilePictureSection}
          >
            <ProfileImage />
          </section>
        </div>
      }
    </>
  );
}
