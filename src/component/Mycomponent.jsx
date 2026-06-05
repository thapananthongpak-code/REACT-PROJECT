import Functional from "./Functional";

const My = [
    {
        id: "1",
        price: 100,
        name: "title",
        emoji: "✅",
        classCom :"text-xs text-blue-500 ",

    },
    {
        id: "2",
        price: 300,
        name: "itle",
        emoji: "✅",
        classCom :"text-lg text-amber-800 ",
    },
];

const Mycomponent = () => {
    return (
        <div>
            {My.map((item) => {
                return (
                    <Functional
                        id={item.id}
                        price={item.price}
                        name={item.name}
                        emoji={item.emoji}
                        classCom={item.classCom}
                    />
                );
            })}
        </div>
    )
};
export default Mycomponent;

