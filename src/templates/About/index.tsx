import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem
        magnam neque distinctio provident consectetur accusamus assumenda fuga
        perferendis quasi rem delectus quo illo consequuntur sunt a dolore nemo
        commodi.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
