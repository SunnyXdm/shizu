import React, {useRef} from 'react';
import Input from '../../components/Input';

const PasswordInput = () => {
  const input = useRef(null);
  return <Input onChange={console.log} placeholder="" reference={input} />;
};

export default PasswordInput;
