
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c029594f00mshf493f72d5f03121p1b937ejsn2e2d00aa3772',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtudeOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c029594f00mshf493f72d5f03121p1b937ejsn2e2d00aa3772',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchExercise = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
