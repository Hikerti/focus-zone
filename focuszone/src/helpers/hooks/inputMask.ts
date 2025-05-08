import {useMask} from "@react-input/mask";

const InputMask = () => {
    const inputRef = useMask({
        mask: '+0 (___) ___-__-__',
        replacement: { _: /\d/ },
    })

    return {inputRef}
};

export default InputMask;