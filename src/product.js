import socket from './client.js';

export const readAll = async (req, res) => {
	try {
		const query = {
			type: 'READALL',
            products: [{
            }],
		};

		const response = await socket.sendMessage(JSON.stringify(query) + '\r\n');

		if (!response) {
			res.status(404).json({ message: 'Products not found' });
			return;
		}

		res.status(200).json(response);
	} catch (error) {
		console.error('Error in readAll controller:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

export const read = async (req, res) => {
	try {
		const { id } = req.params;
		const query = {
			type: 'READ',
			products: [{
				id: id,
			}]
		};

		const response = await socket.sendMessage(JSON.stringify(query) + '\r\n');

		if (!response) {
			res.status(404).json({ message: `Product with id ${id} not found` });
			return;
		}

		res.status(200).json(response);
	} catch (error) {
		console.error('Error in read controller:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

export const create = (req, res) => {
	try {
		const { name, desc, price, quant, img } = req.body;

		const query = {
			type: 'CREATE',
			products: [{
                id: 0,
				name: name,
				desc: desc,
				price: price,
				quant: quant,
				img: img,
			}]
		};

		socket.sendMessage(JSON.stringify(query) + '\r\n');

		res.status(201).json({ message: 'Request received successfully' });
	} catch (error) {
		console.error('Error in create controller:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

export const update = (req, res) => {
	try {
		const { id } = req.params;
		const { name, desc, price, quant, img } = req.body;

		const query = {
			type: 'UPDATE',
			products: [{
				id: id,
				name: name,
				desc: desc,
				price: price,
				quant: quant,
				img: img,
			}]
		};

		socket.sendMessage(JSON.stringify(query) + '\r\n');

		res.status(200).json({ message: 'Request received successfully' });
	} catch (error) {
		console.error('Error in update controller:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

export const remove = (req, res) => {
	try {
		const { id } = req.params;

		const query = {
			type: 'DELETE',
			products: [{
				id: id,
			}]
		};

		socket.sendMessage(JSON.stringify(query) + '\r\n');

		res.status(200).json({ message: 'Request received successfully' });
	} catch (error) {
		console.error('Error in remove controller:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};
