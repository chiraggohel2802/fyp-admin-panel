const useGenerateCode = () => {
  const easyCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const mediumCharacter =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const hardCharacter =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const extremeCharacter =
    '$-._!?@#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  const generatePassword = ({ type, length }) => {
    let characters = '';
    if (type === 'Easy') {
      characters = easyCharacter;
    }
    switch (type) {
      case 'Easy':
        characters = easyCharacter;
        break;
      case 'Medium':
        characters = mediumCharacter;
        break;
      case 'Hard':
        characters = hardCharacter;
        break;
      case 'Extreme':
        characters = extremeCharacter;
        break;

      default:
        alert('An error ocurred while generating a new password...');
    }
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  return { generatePassword };
};

export default useGenerateCode;
