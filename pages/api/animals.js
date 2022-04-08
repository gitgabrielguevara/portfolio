export default function animals(req, res) {
    const animals = [
        'cat',
        'dog',
        'capybara',
        'ostrich',
        'pangolin',
        'bull',
        'guine pig',
        'armadillo'
    ]

    // get a random animals
    const rando = animals[Math.floor(Math.random() * animals.length)]
    res.status(200).json({ rando })
}