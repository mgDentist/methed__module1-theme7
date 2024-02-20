const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
const passedStudents = [];

const filter = (all, failed) => {
    for (let i = 0; i < all.length; i++) {
        if (!failed.includes(all[i])
        ) {
            passedStudents.push(all[i]);
        }
    }

    console.log(`Список сдавших студентов: ${passedStudents.join(', ')}`);
};

filter(allStudents, failedStudents);
