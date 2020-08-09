//todos.js


//ECHO is on.

//volunteers.js

const { db } = require('../util/admin');

//we are fetching all the todos from the database and forwarding them to the client in a list.
exports.getAllVolunteers = (request, response) => {
	db
		.collection('volunteers')
		.get()
		.then((data) => {
			let volunteers = [];
			data.forEach((doc) => {
				volunteers.push({
                    volunteerId: doc.id,
                    name: doc.data().name,
                    surname: doc.data().surname,
                    /*
                    country: doc.data().country,
                    city: doc.data().city,
                    phone: doc.data().phone,
                    bio: doc.data().bio,
                    urgent: doc.data().urgent,
                    groceries: doc.data().groceries,
                    pet: doc.data().pet,
                    ride: doc.data().ride, */
				});
			});
			return response.json(volunteers);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.postOneVolunteer = (request, response) => {
/*	if (request.body.body.trim() === '') {
		return response.status(400).json({ body: 'Must not be empty' });
    }
    
    if(request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    } */
    
    const newVolunteer = {
        name: req.body.name,
        surname: req.body.surname,
        /*
        country: request.body.country,
        city: request.body.city,
        phone: request.body.phone,
        bio: request.body.bio,
        urgent: request.body.urgent,
        groceries: request.body.groceries,
        pet: request.body.pet,
        ride: request.body.ride, */
    }
    db
        .collection('volunteers')
        .add(newVolunteer)
        .then((doc)=>{
            const responseNewVolunteer = newVolunteer;
            responseNewVolunteer.id = doc.id;
            return response.json(responseNewVolunteer);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};

/*
exports.deleteTodo = (request, response) => {
    const document = db.doc(`/todos/${request.params.todoId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Todo not found' })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.editTodo = ( request, response ) => { 
    if(request.body.todoId || request.body.createdAt){
        response.status(403).json({message: 'Not allowed to edit'});
    }
    let document = db.collection('todos').doc(`${request.params.todoId}`);
    document.update(request.body)
    .then(()=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ 
                error: err.code 
        });
    });
}; */