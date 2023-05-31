const express = required('express');

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "hi there"})
})

app.listen(3333)
