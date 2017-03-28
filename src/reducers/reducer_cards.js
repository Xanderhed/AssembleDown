const INITIAL_STATE = [
  {
    id: 1,
    source: "/images/Warbot.jpg",
    name: "Warbot",
    power: 4
  }
]

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
};
