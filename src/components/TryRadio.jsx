import React from 'react'

export default function TryRadio() {
  return (
    <form>
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="radio" className="form-radio text-blue-600 bg-yellow-300 bg-clip-border" name="option" value="1"></input>
                    <span className="ml-2 text-gray-700">Option 1</span>
                </label>
            </div>
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="radio" className="form-radio text-blue-600 selection:backdrop:bg-red-400" name="option" value="2"></input>
                    <span className="ml-2 text-yellow-700">Option 2</span>
                </label>
            </div>
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="radio" className="form-radio text-blue-600 selection:backdrop:bg-red-400" name="option" value="3"></input>
                    <span className="ml-2 text-gray-700">Option 3</span>
                </label>
            </div>
        </form>
  )
}
