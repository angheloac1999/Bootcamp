import type { CandidateType } from "@/types/candidates"
import { cn } from "@/utils/styles";

type CandidateProps = CandidateType & {
    className?: string;
    onClick?: (name: string) => void;
}

const Candidate  = (props: CandidateProps) => {
    const { name, age, experience, skills, status, working} = props;

    return (    
        <div 
            className={cn(
                props.className, 
                'border border-gray-300 rounded-lg p-4 shadow-md flex-col min-w-[300px]')}>
            <div className="flex items-center justify-between mb-2 gap-y-2">
                <h2 className="text-xl font-bold">{name.toUpperCase()}</h2>
                <span className={cn(getStatusColor(status), 'text-sm font-medium px-4 py-1 rounded-full text-white')}>{status.toUpperCase()}</span>
            </div>
            <p className="text-gray-500">Age: {age}</p>
            <p className="text-gray-500">Experience: {experience} years</p>
            <p className={cn('text-gray-500', working ? 'text-green-600' : 'text-red-600')}>Working: {working ? 'Yes' : 'No'}</p>
            <h3 className="text-lg font-semibold mt-2">Skills:</h3>
            <ol className="list-decimal list-inside text-gray-700">
                {skills.map((skill, index) => (
                    <span key={index} className="block">
                        {skill}
                    </span>
                ))}
            </ol>
            <button className="rounded-md border-2 border-black bg-gray-300 mt-4 w-full hover:bg-gray-400 transition-transform" onClick={copyData.bind(null, props)}>
                Copiar datos
            </button>
        </div>
    )
}

  function copyData(candidate: CandidateProps) {
    const textToCopy = `Name: ${candidate.name}, Status: ${candidate.status}, Working: ${candidate.working}, Age: ${candidate.age}, Experience: ${candidate.experience}, Skills: ${candidate.skills.join(
      ', ',
    )}`

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert('Data copied to clipboard!'))
      .catch((err) => console.error('Failed to copy: ', err))
  }

function getStatusColor(status: CandidateType['status']) {
    if (status === 'Hired') {
        return 'bg-green-600';
    }
    if (status === 'Pending') {
        return 'bg-yellow-600';
    }
    if (status === 'Reviewing') {
        return 'bg-blue-600';
    }
    if (status === 'Refused') {
        return 'bg-red-600';
    }
    if (status === 'Interviewing') {
        return 'bg-purple-600';
    }
    return 'bg-gray-600';

}

export default Candidate