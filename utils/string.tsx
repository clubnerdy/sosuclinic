import React from 'react';

/**
 * 문자열 배열을 받아 React 노드 배열로 변환합니다.
 * 배열의 각 요소는 <span> 태그로 감싸지며, 요소 사이에는 <br /> 태그가 삽입됩니다.
 * 
 * @param {string[]} lines - 변환할 문자열 배열
 * @returns {React.ReactNode} - 변환된 React 노드
 */
export const formatDescription = (lines: string[], style = {}): React.ReactNode => {

    return lines.map((line, index) => (
        <React.Fragment key={index}>
            <span style={style ? style : {
                color: "#000000",
                textAlign: "center",
                fontFamily: "Pretendard Variable",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 300,
            }}>{line}</span>
            {index !== lines.length - 1 && <br />}
        </React.Fragment>
    ));
};
