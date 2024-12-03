import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { Quote } from '../types/quote.type'
import { getQuotes } from '../redux/quoteSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Row } from './elements/Row'
import { Col } from './elements/Col'
import { Icon, Box, BoxProps } from '@chakra-ui/react'
import { FaTwitter, FaTumblr } from 'react-icons/fa'
import { Btn } from './elements/Btn'
import { LinkBtn } from './elements/LinkBtn'

interface RandomQuoteProps extends BoxProps {
    color: string
}

export const RandomQuote = ({ color }: RandomQuoteProps) => {
    const dispatch = useAppDispatch()
    const quotesData: Quote[] | null = useAppSelector(state => state.quotes.data)
    useEffect(() => {
        dispatch(getQuotes())
    }, [dispatch])
    const quotes = quotesData ? quotesData : []
    const [displayedQuote, setDisplayedQuote] = useState<Quote | null>(null)

    useEffect(() => {
        if (quotes.length > 0 && !displayedQuote) {
            const randomIdx = Math.floor(Math.random() * quotes.length);
            setDisplayedQuote(quotes[randomIdx]);
        }
    }, [quotes, displayedQuote]);

    const handleNewQuote = () => {
        if (quotes.length > 0) {
            const randomIdx = Math.floor(Math.random() * quotes.length);
            setDisplayedQuote(quotes[randomIdx]);
        }
    };

    return (
        <Col
            justifyContent={'center'} alignItems={'center'}
            p={'40px 50px'}
            w={'450px'}
            bgColor={'#fff'}
            borderRadius={'5px'}
        >
            {
                displayedQuote ?
                    <Col color={color}>
                        <Row id='Text'>
                            <FontAwesomeIcon icon={faQuoteLeft} fontSize={'1em'} />
                            <Box textAlign={"center"} fontSize={'1.75rem'} fontWeight={500}>{displayedQuote.quote}</Box>
                        </Row>
                        <Row id='author' display={'flex'} justifyContent={'end'} pt={'20px'} fontWeight={400}>- {displayedQuote.author}</Row>
                    </Col>
                    : <span></span>
            }
            <Row justifyContent={"space-between"} w={'100%'} mt={'30px'}>
                <Row gap={'4px'}>
                    <LinkBtn
                        id='tweet-quote'
                        href='https://x.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20only%20person%20you%20are%20destined%20to%20become%20is%20the%20person%20you%20decide%20to%20be.%22%20Ralph%20Waldo%20Emerson'
                        cursor={"pointer"}
                        color={"#fff"} bgColor={color}
                    >
                        <Icon
                            as={FaTwitter}
                        />
                    </LinkBtn>
                    <LinkBtn
                        href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DRalph%2BWaldo%2BEmerson%26content%3DThe%2Bonly%2Bperson%2Byou%2Bare%2Bdestined%2Bto%2Bbecome%2Bis%2Bthe%2Bperson%2Byou%2Bdecide%2Bto%2Bbe.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button'
                        cursor={"pointer"}
                        target={'_blank'}
                        color={"#fff"} bgColor={color}
                    >
                        <Icon
                            as={FaTumblr}
                        />
                    </LinkBtn>
                </Row>
                <Btn
                    text={"New Quote"}
                    onClickFunc={handleNewQuote}
                    id='new-quote'
                    color={'#fff'} bgColor={color} />
            </Row>
        </Col>

    )
}