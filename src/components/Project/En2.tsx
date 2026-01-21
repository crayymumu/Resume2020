import Divider from '../Common/Divider'
import SmallTitle from '../Common/SmallTitle'
import style from './Project2/style.module.scss'

export default function Project() {
  return (
    <div className={style.project2}>
      <Divider />
      <SmallTitle>Energy Storage Cloud Learning Platform</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://eslearning.handy-es.com" target="_blank" rel="noreferrer noopener">eslearning.handy-es.com</a>
      </p>
      <p>Professional online education platform for energy storage industry, providing course learning, video playback, and teaching management.</p>
      <p>1. Vue.js modular frontend architecture with ckplayer and Alibaba Cloud video solutions</p>
      <p>2. Multi-format video playback support, QR code generation and social sharing</p>
      <p>3. Image preloading for visual experience optimization, modular lazy loading</p>

      <Divider />
      <SmallTitle>EESA International Alliance Website</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://www.eesaenergy.com" target="_blank" rel="noreferrer noopener">www.eesaenergy.com</a>
      </p>
      <p>Brand showcase website for international energy storage alliance, supporting bilingual (Chinese/English) internationalization.</p>
      <p>1. Next.js React framework + i18n internationalization + ckplayer video + Alibaba Cloud infrastructure</p>
      <p>2. Chinese/English switching with 28 script files loaded on demand</p>
      <p>3. SSR optimization, comprehensive video playback supporting multimedia content</p>

      <Divider />
      <SmallTitle>Exhibition Management System</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://service.eesaexpo.com" target="_blank" rel="noreferrer noopener">service.eesaexpo.com</a>
        {' | '}
        <a href="https://expo-backend.eesaenergy.com" target="_blank" rel="noreferrer noopener">expo-backend.eesaenergy.com</a>
      </p>
      <p>Complete digital management solution for exhibitions, covering multi-role business process management.</p>
      <p>1. Vue 3 + Pinia + Vue Router stack, Alibaba Cloud CDN for unified dependency management</p>
      <p>2. Multi-role permission system, exhibitor info, sponsorship, award application features</p>
      <p>3. Booth builder team management, venue review workflow, dynamic field configuration</p>
    </div>
  )
}
