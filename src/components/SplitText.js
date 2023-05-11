const SplitText = ({ text }) => {
    return (
        <>
            {text.split("").map(function (char, index) {
                let style = { "animation-delay": 0.5 + index / 10 + "s" };
                return (
                    <span aria-hidden="true" key={index} style={style}>
                        {char}
                    </span>
                );
            })}
        </>
    );
};

export default SplitText;
