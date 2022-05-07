import type { NextApiRequest, NextApiResponse } from 'next'

type Option = {
  content: string,
  correct: boolean
}

type QuizStep = {
  question: string,
  options: Option[]
}

type Quiz = QuizStep[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quiz>
) {
	const {key: categoryKey} = req.query

	res.status(200).json(Data[categoryKey as string])
}



const Data: {[key: string]: Quiz} = {
	general: [
		{
			question: "Grand Central Terminal, Park Avenue, New York is the world's:",
			options: [
				{ content: "largest railway station", correct: true },
				{ content: "highest railway station", correct: false },
				{ content: "longest railway station", correct: false },
				{ content: "None of them", correct: false },
			],
		},
		{
			question:
				"For which of the following disciplines is Nobel Prize awarded?",
			options: [
				{ content: "Physics and Chemistry", correct: false },
				{ content: "Physiology or Medicine", correct: false },
				{ content: "Literature, Peace and Economics", correct: false },
				{ content: "All of them", correct: true },
			],
		},
		{
			question: "Hitler party which came into power in 1933 is known as:",
			options: [
				{ content: "Labour Party", correct: false },
				{ content: "Nazi Party", correct: true },
				{ content: "Ku-Klux-Klan", correct: false },
				{ content: "Democratic Party", correct: false },
			],
		},
		{
			question: "Who is the father of Geometry?",
			options: [
				{ content: "Aristotle", correct: false },
				{ content: "Euclid", correct: true },
				{ content: "Pythagoras", correct: false },
				{ content: "Kepler", correct: false },
			],
		},
		{
			question: "Nuclear sizes are expressed in a unit named:",
			options: [
				{ content: "Fermi", correct: true },
				{ content: "Angstrom", correct: false },
				{ content: "Newton", correct: false },
				{ content: "Tesla", correct: false },
			],
		},
		{
			question: "Which of the following is used in pencils?",
			options: [
				{ content: "Graphite", correct: true },
				{ content: "Silicon", correct: false },
				{ content: "Charcoal", correct: false },
				{ content: "Phosphorous", correct: false },
			],
		},
		{
			question:
				"What is part of a database that holds only one type of information?",
			options: [
				{ content: "Report", correct: false },
				{ content: "Field", correct: true },
				{ content: "Record", correct: false },
				{ content: "File", correct: false },
			],
		},
		{
			question: "OS computer abbreviation in Computer Science usually means:",
			options: [
				{ content: "Order of Significance", correct: false },
				{ content: "Optical Sensor", correct: false },
				{ content: "Operating System", correct: true },
				{ content: "Open Source", correct: false },
			],
		},
		{
			question:
				"Who is the author of the books 'Nineteen Eighty Four' & 'Animal Farm'?",
			options: [
				{ content: "Thomas Hardy", correct: false },
				{ content: "Emile Zola", correct: false },
				{ content: "George Orwell", correct: true },
				{ content: "Walter Scott", correct: false },
			],
		},
		{
			question: "Only one of them is the book was written by Fyodor Dostoevsky:",
			options: [
				{ content: "The Great Gatsby", correct: false },
				{ content: "Crime and Punishment", correct: true },
				{ content: "Hamlet", correct: false },
				{ content: "Anna Karenina", correct: false },
			],
		},
	],
	sport: [
		{
			question: "What's the diameter of a basketball hoop?",
			options: [
				{ content: "44.72cm", correct: false },
				{ content: "45.72cm", correct: true },
				{ content: "46.72cm", correct: false },
				{ content: "43cm", correct: false },
			],
		},
		{
			question: "The Olympics are held every how many years?",
			options: [
				{ content: "4", correct: true },
				{ content: "5", correct: false },
				{ content: "6", correct: false },
				{ content: "10", correct: false },
			],
		},
		{
			question: "Which sport is best known as the 'king of sports'?",
			options: [
				{ content: "Soccer", correct: true },
				{ content: "Basketball", correct: false },
				{ content: "Golf", correct: false },
				{ content: "Wrestling", correct: false },
			],
		},
		{
			question: "Which country has competed the most times in the Summer Olympics yet hasn't won a gold medal?",
			options: [
				{ content: "USA", correct: false },
				{ content: "North Korea", correct: false },
				{ content: "Nigeria", correct: false },
				{ content: "The Philippines", correct: true },
			],
		},
		{
			question: "How many medals did China win at the Beijing Olympics?",
			options: [
				{ content: "25", correct: false },
				{ content: "70", correct: false },
				{ content: "100", correct: true },
				{ content: "52", correct: false },
			],
		},
	],
	mathematics: [
		{
			question: "What is the only number that does not have its Roman numeral?",
			options: [
				{ content: "10", correct: false },
				{ content: "100", correct: false },
				{ content: "1000", correct: false },
				{ content: "0", correct: true },
			],
		},
		{
			question: "Icosahedrons have how many equal sides?",
			options: [
				{ content: "10", correct: false },
				{ content: "20", correct: true },
				{ content: "30", correct: false },
				{ content: "50", correct: false },
			],
		},
		{
			question: "What comes after a trillion?",
			options: [
				{ content: "Billion", correct: false },
				{ content: "Quadrillion", correct: true },
				{ content: "Million", correct: false },
				{ content: "None of them", correct: false },
			],
		},
		{
			question: "In 1882, Whiz Ferdinand Von Lindemann discovered which Mathematical Symbol?",
			options: [
				{ content: "Pi", correct: true },
				{ content: "Infinity", correct: false },
				{ content: "Product", correct: false },
				{ content: "Sum", correct: false },
			],
		},
		{
			question: "Who created the equal sign?",
			options: [
				{ content: "René Descartes", correct: false },
				{ content: "Carl Friedrich Gauss", correct: false },
				{ content: "LeonHard Euler", correct: false },
				{ content: "Robert Recorde", correct: true },
			],
		},
		{
			question: "What is the only number that has letters in alphabetical order?",
			options: [
				{ content: "30", correct: false },
				{ content: "40", correct: true },
				{ content: "50", correct: false },
				{ content: "10", correct: false },
			],
		},
		{
			question: "What does the term 'crore' mean?",
			options: [
				{ content: "Ten million", correct: true },
				{ content: "One million", correct: false },
				{ content: "Hundred million", correct: false },
				{ content: "Ten billion", correct: false },
			],
		},
		{
			question: "What is the original name for the number 0?",
			options: [
				{ content: "Zero", correct: false },
				{ content: "Naught", correct: false },
				{ content: "Cipher", correct: true },
				{ content: "Zip", correct: false },
			],
		},
		{
			question: "Who invented the use of negative numbers?",
			options: [
				{ content: "Chinese", correct: true },
				{ content: "Sweden", correct: false },
				{ content: "American", correct: false },
				{ content: "Russian", correct: false },
			],
		},
		{
			question: "What is the value of 'e'?",
			options: [
				{ content: "2.316", correct: false },
				{ content: "3.13", correct: false },
				{ content: "3.14", correct: false },
				{ content: "2.718", correct: true },
			],
		},
	],
}
