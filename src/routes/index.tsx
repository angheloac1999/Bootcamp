import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Candidate from '@/components/candidate'
import type { CandidateType } from '@/types/candidates'

export const Route = createFileRoute('/')({
  component: App,
})

const data: Array<CandidateType> = [
  {
    name: 'Anghelo Cruz',
    age: 25,
    experience: 2,
    skills: ['JavaScript', 'Python', 'Node.js'],
    status: 'Pending',
    working: true,
  },
  {
    name: 'Licet Verduga',
    age: 30,
    experience: 6,
    skills: ['Django', 'Flask'],
    status: 'Reviewing',
    working: false,
  },
  {
    name: 'Jorge Paredes',
    age: 28,
    experience: 4,
    skills: ['React', 'Angular'],
    status: 'Hired',
    working: true,
  },
  {
    name: 'Maria Lopez',
    age: 22,
    experience: 1,
    skills: ['HTML', 'CSS'],
    status: 'Refused',
    working: false,
  },
  {
    name: 'Carlos Sanchez',
    age: 35,
    experience: 10,
    skills: ['Java', 'Spring'],
    status: 'Interviewing',
    working: true,
  },
  {
    name: 'Ana Torres',
    age: 27,
    experience: 3,
    skills: ['PHP', 'Laravel'],
    status: 'Pending',
    working: false,
  },
  {
    name: 'Luis Ramirez',
    age: 29,
    experience: 5,
    skills: ['C#', '.NET'],
    status: 'Reviewing',
    working: true,
  }
]

function App() {
  return (
    <div className="flex flex-row flex-wrap gap-4 p-4 justify-center items-center">
      {data.map((candidate, index) => (
        <Candidate
          key={index}
          name={candidate.name}
          age={candidate.age}
          experience={candidate.experience}
          skills={candidate.skills}
          status={candidate.status}
          working={candidate.working}
          onClick={() => alert(`Candidato seleccionado: ${candidate.name}`)}>
        </Candidate>
      ))}
    </div>
  )
}
