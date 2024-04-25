import React from 'react'
import Accordion from './Accordion/Accordion'
import DragAndDropNotes from './DragAndDropNotes/DragAndDropNotes'
import GithubProfileFinder from './GithubProfileFinder/GithubProfileFinder'
import ModalPopUp from './ModalPopUp/ModalPopUp'
import ImageSlider from './ImageSlider/ImageSlider'
import ProgressBarPage from './ProgressBar/ProgressBarPage'
import Tabs from './Tabs/Tabs'
import PasswordGenerator from './PasswordGenerator/PasswordGenerator'
import ScrollToBottom from './ScrollToBottom/ScrollToBottom'
import SearchAutoComplete from './SearchAutoComplete/SearchAutoComplete'
import LoadMore from './LoadMore/LoadMore'
import Quiz from './Quiz/Quiz'
import TodoList from './TodoList/TodoList'
import CurrencyConverter from './CurrencyConverter/CurrencyConverter'

const data = [
    {name: 'Password Generator', content: <PasswordGenerator />},
    {name: 'Accordion', content: <Accordion />},
    {name: 'Drag And Drop Notes', content: <DragAndDropNotes />},
    {name: 'Quiz Application', content: <Quiz />},
    {name: 'Currency Converter', content: <CurrencyConverter />},
    {name: 'Modal Pop-Up', content: <ModalPopUp />},
    {name: 'Github Profile Finder', content: <GithubProfileFinder />},
    {name: 'Image Slider', content: <ImageSlider />},
    {name: 'Progress Bar', content: <ProgressBarPage />},
    {name: 'Tabs', content: <Tabs />},
    {name: 'Scroll To Bottom', content: <ScrollToBottom />},
    {name: 'Search Auto Complete', content: <SearchAutoComplete />},
    {name: 'Load More', content: <LoadMore />},
    {name: 'Todo List', content: <TodoList />},
]

export default data