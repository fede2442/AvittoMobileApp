import Realm from "realm";

class Habit extends Realm.Object { }
Habit.schema = {
    name: "Habit",
    properties: {
        name: "string",
        uid: "string?",
        //last_mod: "date",
        strikeCount: "int",
        strikeHistoricMax: "int",
        habitIcon: "string",
    },
    primaryKey: "name",
};

export default new Realm({ schema: [Habit] });