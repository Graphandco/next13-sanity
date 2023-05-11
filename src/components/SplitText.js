const SplitText = ({ text, color }) => {
    console.log(color);
    return (
        <>
            {text.split("").map((char, index) => {
                let style = {
                    animationDelay: 0.5 + index / 10 + "s",
                    color: color,
                };
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
