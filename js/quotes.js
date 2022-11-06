const quotes = [
	{
		quote: '준비하지 않은 자는 기회가 와도 소용없다.',
		author: '알렉시스 드 토크빌',
	},
	{
		quote: '노력에 집착하라. 숙명적인 노력을.',
		author: '레오나르도 다 빈치',
	},
	{
		quote: '내일이란 오늘의 다른 이름일 뿐',
		author: '윌리엄 포크너',

		author: '오노레 드 발자크',
	},
	{
		quote: '나는 날마다 모든 면에서 점점 좋아지고 있다.',
		author: '에밀쿠에',
	},
	{
		quote: '불가능한 일을 해보는 것은 신나는 일이다.',
		author: '월트 디즈니',
	},
	{
		quote: '할 수 있다고 믿는 사람은 결국 그렇게 된다.',
		author: '샤론 드골',
	},
	{
		quote: '당신이 포기할 때, 나는 시작한다.',
		author: '엘론 머스크',
	},
	{
		quote: '나는 이룰 때까지 노력할 것이다.',
		author: '브라이언 트레이시',
	},
	{
		quote: '한 번 포기하면 습관이 된다. 절대 포기하지 말아라.',
		author: '마이클 조던',
	},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
