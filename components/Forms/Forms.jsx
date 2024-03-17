import { ScrollShadow } from '@nextui-org/react'
import ContactForm from './Contact'
import ExperienceForm from './Experience'
import PersonnalForm from './Personnal'
import SkillsForm from './Skills'

export default function Forms() {
  return (
    <ScrollShadow hideScrollBar className='h-[90vh] flex flex-col justify-start text-start space-y-3 divide-x-1 gap-4'>
        <PersonnalForm />
        <ContactForm />
        <SkillsForm />
        <ExperienceForm />
    </ScrollShadow>
  )
}
