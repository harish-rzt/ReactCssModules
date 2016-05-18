const initialState = [{
    name: "ActiveMQ-prod",
    properties: [{name: "Memory", value: "16gb"},
        {name: "Memory Used", value: "75%"},
        {name: "Broker URL", value: "27.0.0.1:3245"},
        {name: "Uptime", value: "15H"},
        {name: "Validated", value: "Yes"}]
},
    {
        name: "ActiveMQ-prod2",
        properties: [{name: "Memory", value: "16gb"},
            {name: "Memory Used", value: "75%"},
            {name: "Broker URL", value: "27.0.0.1:3245"},
            {name: "Uptime", value: "15H"},
            {name: "Validated", value: "Yes"}]
    }];

export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        default:
            return state;

    }
}