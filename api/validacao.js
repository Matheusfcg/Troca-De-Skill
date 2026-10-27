export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby7ewqsesdbOKS9vFKUzpc5MvAiRq3j8k-qNKPTuuO5iripqwRnWUBcqnuqeUU-bo_v/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      erro: String(err.message || err)
    });
  }
}
