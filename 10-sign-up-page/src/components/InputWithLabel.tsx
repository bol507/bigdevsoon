import { useState } from "react"
import './InputWithLabel.css'

interface InputWithLabelProps {
  label: string;
  type?: string;
}

const InputWithLabel:React.FC<InputWithLabelProps> = ({ label, type='text' }) => {
  const [value, setValue] = useState('')

  return (
    <div className="button-with-label">
      <input
        type={type}
        placeholder=""
        className={`input ${value ? 'focused' : ''}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setValue(value)} 
        
      />
     
        <label className={`label ${value ? 'focused' : ''}`}>{label}</label>
      
    </div>

  )
}

export default InputWithLabel