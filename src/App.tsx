import { Icon, Textarea, Text, Box } from "@chakra-ui/react";
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa"
import { Row } from "./components/elements/Row";
import { Col } from "./components/elements/Col";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { onChange } from "./redux/inputSlice";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const input: string | null = useAppSelector(state => state.input.value)
  const [isEditor, setIsEditor] = useState<boolean>(false)
  const [isPreview, setIsPreview] = useState<boolean>(false)

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    dispatch(onChange(e.target.value))
  }

  return (
    <Col
      alignItems={"center"}
      bgColor={"#87b5b5"}
      minH={"100vh"}
    >
      <Col id="editor-wrap"
        maxW={{
          base: "550px",
          md: "600px"
        }}
        w={"80vw"}
        m={"1.125rem auto"}
        border={"1px solid black"}
        boxShadow={"1px 1px 10px 2px #3a5f5f"}
        h={!isEditor ? "auto" : "100vh"}
        display={!isPreview ? "flex" : "none"}
      >
        <Row id="editor-header" justifyContent={"space-between"} alignItems={"center"} fontWeight={700} bgColor={"#4aa3a3"} p={'0.3rem'} border={"1px solid black"} fontSize={"20px"}>
          <Row id="editor-tilte" alignItems={'center'} gap={"5px"}>
            <Icon as={FaFreeCodeCamp} />
            <Text> Editor</Text>
          </Row>
          <Icon
            as={!isPreview ? FaExpandArrowsAlt : FaCompressAlt}
            _hover={{ color: "#57e2b1" }}
            onClick={() => setIsEditor(!isEditor)} />
        </Row>
        <Textarea rows={12}
          id="editor"
          autoFocus
          onChange={handleChangeInput}
          value={input}
          borderRadius={0}
          bgColor={"#c0d8d8"}
          h={"100%"}
        />
      </Col>
      <Col id="preview-wrap"
        display={!isEditor ? "flex" : "none"}
        maxW={630}
        w={"90vw"}
        maxWidth={{
          base: "630px",
          md: "800px"
        }}
        border={"1px solid black"}
        margin={"1.125rem auto"}
        boxShadow={"1px 1px 10px 2px #3a5f5f"}
      >
        <Row id="preview-header" justifyContent={"space-between"} alignItems={"center"} fontWeight={700} bgColor={"#4aa3a3"} p={'0.3rem'} border={"1px solid black"} fontSize={"20px"}>
          <Row id="preview-tilte" alignItems={'center'} gap={"5px"}>
            <Icon as={FaFreeCodeCamp} />
            <Text> Preview</Text>
          </Row>
          <Icon
            as={!isPreview ? FaExpandArrowsAlt : FaCompressAlt}
            _hover={{ color: "#57e2b1" }}
            onClick={() => setIsPreview(!isPreview)} />
        </Row>
        <Box w={"full"} id="preview"
          sx={{
            h1: { fontSize: "2xl", fontWeight: "bold", marginBottom: 4 },
            h2: { fontSize: "xl", fontWeight: "bold", marginBottom: 3 },
            h3: { fontSize: "lg", fontWeight: "bold", marginBottom: 2 },
            p: { marginBottom: 2 },
            table: {
              borderCollapse: "collapse",
              marginTop: 4,
            },
            th: {
              fontWeight: "bold",
              border: "2px solid",
              padding: 2,
              textAlign: "left",
            },
            td: {
              border: "2px solid",
              padding: 2,
            },
            pre: {
              bgColor: "white",
              p: "5px"
            },
            ul: {
              pl: "40px"
            },
            ol: {
              pl: "40px",
              my: "16px"
            },
          }}
          bgColor={"#c0d8d8"}
        >
          <Box p={"15px"}
            border={"1px solid black"}
            minH={"200px"}
          >
            <Markdown
              remarkPlugins={[remarkGfm]}>
              {input}
            </Markdown>
          </Box>
        </Box>
      </Col>
    </Col>
  );
}

export default App;
